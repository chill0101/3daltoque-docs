import React, { createContext, useContext, useId } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Switch as NativeSwitch, Text, TextInput, View } from "react-native";
import type { PressableProps, TextInputProps, ViewStyle } from "react-native";
import { tokens } from "./tokens.native";

type Theme = "light" | "dark";
type Tone = "neutral" | "info" | "success" | "warning" | "danger";
const ThemeContext = createContext<Theme>("light");
export function ThemeProvider({ theme = "light", children }: { theme?: Theme; children: React.ReactNode }) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
function useColors() { return tokens.colors[useContext(ThemeContext)]; }
export function Button({ label, loading = false, variant = "primary", disabled, style, ...props }: PressableProps & { label: string; loading?: boolean; variant?: "primary" | "secondary" | "danger" }) {
  const c = useColors(); const backgroundColor = variant === "danger" ? c.danger : variant === "secondary" ? c.secondary : c.primary;
  const color = variant === "danger" ? c.onDanger : variant === "secondary" ? c.onSecondary : c.onPrimary;
  return <Pressable {...props} disabled={disabled || loading} accessibilityRole="button" accessibilityLabel={props.accessibilityLabel || label} accessibilityState={{ disabled: Boolean(disabled || loading), busy: loading }} style={state => [styles.button, { backgroundColor, opacity: disabled || loading ? .6 : state.pressed ? .85 : 1 }, typeof style === "function" ? style(state) : style]}>{loading && <ActivityIndicator color={color} />}<Text style={[styles.label, { color }]}>{label}</Text></Pressable>;
}
export function TextField({ label, hint, error, style, ...props }: TextInputProps & { label: string; hint?: string; error?: string }) {
  const c = useColors(); const id = useId();
  return <View style={styles.stack}><Text nativeID={id} style={[styles.label, { color: c.text }]}>{label}</Text><TextInput {...props} accessibilityLabel={props.accessibilityLabel || label} placeholderTextColor={c.textMuted} style={[styles.input, { backgroundColor: c.surface, color: c.text, borderColor: error ? c.danger : c.border }, style]} />{hint && <Text style={[styles.hint, { color: c.textMuted }]}>{hint}</Text>}{error && <Text accessibilityLiveRegion="polite" style={[styles.hint, { color: c.danger }]}>{error}</Text>}</View>;
}
export function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  const c = useColors(); return <View style={[styles.card, { backgroundColor: c.surface, borderColor: c.border }]}>{title && <Text accessibilityRole="header" style={[styles.title, { color: c.text }]}>{title}</Text>}{children}</View>;
}
export function Badge({ label, tone = "neutral" }: { label: string; tone?: Tone }) {
  const c = useColors(); const color = tone === "neutral" ? c.text : c[tone]; const backgroundColor = tone === "neutral" ? c.surfaceMuted : c[(tone + "Bg") as "infoBg" | "successBg" | "warningBg" | "dangerBg"];
  return <View style={[styles.badge, { backgroundColor }]}><Text style={[styles.hint, { color, fontWeight: "700" }]}>{label}</Text></View>;
}
export function Alert({ title, message, tone = "info" }: { title: string; message: string; tone?: Exclude<Tone, "neutral"> }) {
  const c = useColors(); const backgroundColor = c[(tone + "Bg") as "infoBg" | "successBg" | "warningBg" | "dangerBg"];
  return <View accessibilityLiveRegion={tone === "danger" ? "assertive" : "polite"} style={[styles.card, { backgroundColor, borderColor: c[tone] }]}><Text style={[styles.label, { color: c[tone] }]}>{title}</Text><Text style={[styles.body, { color: c[tone] }]}>{message}</Text></View>;
}
export function Progress({ label, value }: { label: string; value?: number }) {
  const c = useColors(); const percent = value === undefined ? undefined : Math.min(100, Math.max(0, value));
  const width = (percent === undefined ? "100%" : String(percent) + "%") as ViewStyle["width"];
  return <View accessible accessibilityRole="progressbar" accessibilityLabel={label} accessibilityValue={percent === undefined ? { text: "Procesando" } : { min: 0, max: 100, now: percent }} style={styles.stack}><Text style={[styles.hint, { color: c.text }]}>{label}</Text><View style={[styles.track, { backgroundColor: c.surfaceMuted }]}><View style={[styles.bar, { width, backgroundColor: c.primary, opacity: percent === undefined ? .5 : 1 }]} /></View></View>;
}
export function EmptyState({ title, description, action }: { title: string; description: string; action?: React.ReactNode }) {
  const c = useColors(); return <View style={[styles.card, { backgroundColor: c.surfaceMuted, borderColor: c.border }]}><Text accessibilityRole="header" style={[styles.title, { color: c.text }]}>{title}</Text><Text style={[styles.body, { color: c.textMuted }]}>{description}</Text>{action}</View>;
}
export function SwitchField({ label, value, onValueChange, disabled = false }: { label: string; value: boolean; onValueChange: (value: boolean) => void; disabled?: boolean }) {
  const c = useColors(); return <View style={styles.row}><Text style={[styles.body, { color: c.text, flex: 1 }]}>{label}</Text><NativeSwitch value={value} onValueChange={onValueChange} disabled={disabled} accessibilityLabel={label} accessibilityState={{ checked: value, disabled }} trackColor={{ false: c.border, true: c.primary }} /></View>;
}
export function Money({ amountLabel, currency, pendingLabel = "Importe por confirmar" }: { amountLabel?: string | null; currency?: string; pendingLabel?: string }) {
  const c = useColors(); return <Text style={[styles.money, { color: c.text }]}>{amountLabel ? (currency ? currency + " " : "") + amountLabel : pendingLabel}</Text>;
}
const styles = StyleSheet.create({
  stack: { gap: 8 }, row: { flexDirection: "row", alignItems: "center", gap: 16, minHeight: tokens.size.control },
  button: { minHeight: tokens.size.control, paddingHorizontal: 20, paddingVertical: 12, borderRadius: tokens.radius.md, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 8 },
  label: { fontFamily: tokens.fonts.body, fontSize: tokens.fontSize.body, fontWeight: "700", lineHeight: 23 },
  body: { fontFamily: tokens.fonts.body, fontSize: tokens.fontSize.body, lineHeight: 25 },
  hint: { fontFamily: tokens.fonts.body, fontSize: tokens.fontSize.label, lineHeight: 21 },
  title: { fontFamily: tokens.fonts.display, fontSize: tokens.fontSize.title, fontWeight: "700", lineHeight: 29 },
  input: { minHeight: tokens.size.control, borderWidth: 1, borderRadius: tokens.radius.md, paddingHorizontal: 14, paddingVertical: 12, fontFamily: tokens.fonts.body, fontSize: tokens.fontSize.body, lineHeight: 24 },
  card: { padding: 20, gap: 12, borderRadius: tokens.radius.lg, borderWidth: 1 },
  badge: { alignSelf: "flex-start", borderRadius: 999, paddingHorizontal: 10, paddingVertical: 5 },
  track: { height: 10, borderRadius: 999, overflow: "hidden" }, bar: { height: 10, borderRadius: 999 },
  money: { fontFamily: tokens.fonts.display, fontSize: tokens.fontSize.title, fontWeight: "700", lineHeight: 31 }
});
