"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from "react";

export type Tone = "neutral" | "info" | "success" | "warning" | "danger";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
};
const classes = (...values: Array<string | undefined | false>) => values.filter(Boolean).join(" ");

export function Button({ variant = "primary", size = "md", loading = false, disabled, type = "button", className, children, ...props }: ButtonProps) {
  return <button {...props} type={type} className={classes("atq-button", className)} data-variant={variant} data-size={size} disabled={disabled || loading} aria-busy={loading || undefined}>
    {loading && <span className="atq-spinner" aria-hidden="true" />}<span>{children}</span>
  </button>;
}
export function IconButton({ label, icon, tone = "neutral", ...props }: Omit<ButtonProps, "children" | "variant"> & { label: string; icon: ReactNode; tone?: "neutral" | "danger" }) {
  return <Button {...props} variant={tone === "danger" ? "danger" : "ghost"} className={classes("atq-icon-button", props.className)} aria-label={label}><span aria-hidden="true">{icon}</span></Button>;
}
type FieldMeta = { label: string; hint?: string; error?: string };
function FieldFrame({ id, label, hint, error, children }: FieldMeta & { id: string; children: ReactNode }) {
  return <div className="atq-field"><label className="atq-label" htmlFor={id}>{label}</label>{children}
    {hint && <p className="atq-hint" id={id + "-hint"}>{hint}</p>}
    {error && <p className="atq-field-error" id={id + "-error"}>{error}</p>}
  </div>;
}
function described(id: string, hint?: string, error?: string, extra?: string) {
  return [extra, hint && id + "-hint", error && id + "-error"].filter(Boolean).join(" ") || undefined;
}
export function TextField({ label, hint, error, id: supplied, className, ...props }: InputHTMLAttributes<HTMLInputElement> & FieldMeta) {
  const generated = useId(); const id = supplied || generated;
  return <FieldFrame {...{ id, label, hint, error }}><input {...props} id={id} className={classes("atq-input", className)} aria-invalid={Boolean(error) || props["aria-invalid"]} aria-describedby={described(id, hint, error, props["aria-describedby"])} /></FieldFrame>;
}
export function TextArea({ label, hint, error, id: supplied, className, rows = 4, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & FieldMeta) {
  const generated = useId(); const id = supplied || generated;
  return <FieldFrame {...{ id, label, hint, error }}><textarea {...props} rows={rows} id={id} className={classes("atq-input", className)} aria-invalid={Boolean(error) || props["aria-invalid"]} aria-describedby={described(id, hint, error, props["aria-describedby"])} /></FieldFrame>;
}
export function Select({ label, hint, error, options, id: supplied, className, ...props }: SelectHTMLAttributes<HTMLSelectElement> & FieldMeta & { options: Array<{ value: string; label: string; disabled?: boolean }> }) {
  const generated = useId(); const id = supplied || generated;
  return <FieldFrame {...{ id, label, hint, error }}><select {...props} id={id} className={classes("atq-input", className)} aria-invalid={Boolean(error) || props["aria-invalid"]} aria-describedby={described(id, hint, error, props["aria-describedby"])}>{options.map(option => <option key={option.value} value={option.value} disabled={option.disabled}>{option.label}</option>)}</select></FieldFrame>;
}
export function Checkbox({ label, hint, error, id: supplied, className, ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & FieldMeta) {
  const generated = useId(); const id = supplied || generated;
  return <div className="atq-field"><label className={classes("atq-choice", className)} htmlFor={id}><input {...props} id={id} type="checkbox" aria-invalid={Boolean(error) || props["aria-invalid"]} aria-describedby={described(id, hint, error, props["aria-describedby"])} /><span>{label}</span></label>{hint && <p id={id + "-hint"} className="atq-hint">{hint}</p>}{error && <p id={id + "-error"} className="atq-field-error">{error}</p>}</div>;
}
export type RadioOption = { value: string; label: string; disabled?: boolean };
export function RadioGroup({ label, options, value, onValueChange, error, disabled = false }: { label: string; options: RadioOption[]; value?: string; onValueChange: (value: string) => void; error?: string; disabled?: boolean }) {
  const id = useId();
  return <fieldset className="atq-fieldset" disabled={disabled} aria-describedby={error ? id + "-error" : undefined}><legend className="atq-label">{label}</legend>{options.map((option, index) => <label className="atq-choice" key={option.value} htmlFor={id + "-" + index}><input type="radio" id={id + "-" + index} name={id} value={option.value} checked={value === option.value} disabled={option.disabled} onChange={() => onValueChange(option.value)} /><span>{option.label}</span></label>)}{error && <p className="atq-field-error" id={id + "-error"}>{error}</p>}</fieldset>;
}
export function SwitchField({ label, hint, id: supplied, ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & { label: string; hint?: string }) {
  const generated = useId(); const id = supplied || generated;
  return <div className="atq-field"><label className="atq-choice atq-switch" htmlFor={id}><input {...props} id={id} type="checkbox" role="switch" aria-describedby={described(id, hint, undefined, props["aria-describedby"])} /><span>{label}</span></label>{hint && <p id={id + "-hint"} className="atq-hint">{hint}</p>}</div>;
}
export function Card({ title, description, actions, children, variant = "default", className }: { title?: string; description?: string; actions?: ReactNode; children?: ReactNode; variant?: "default" | "elevated" | "inset"; className?: string }) {
  return <section className={classes("atq-card", className)} data-variant={variant}>{(title || description || actions) && <header className="atq-card-header"><div>{title && <h3 className="atq-card-title">{title}</h3>}{description && <p className="atq-muted">{description}</p>}</div>{actions}</header>}{children}</section>;
}
export function Badge({ tone = "neutral", children }: { tone?: Tone; children: ReactNode }) {
  return <span className="atq-badge" data-tone={tone}><span className="atq-badge-dot" aria-hidden="true" />{children}</span>;
}
export function Alert({ tone = "info", title, children, action }: { tone?: Tone; title: string; children?: ReactNode; action?: ReactNode }) {
  return <div className="atq-alert" data-tone={tone} role={tone === "danger" ? "alert" : "status"}><strong>{title}</strong>{children && <div>{children}</div>}{action && <div className="atq-actions">{action}</div>}</div>;
}
export type DialogProps = { open: boolean; title: string; description?: string; onClose: () => void; children?: ReactNode; actions?: ReactNode; variant?: "dialog" | "sheet" };
export function Dialog({ open, title, description, onClose, children, actions, variant = "dialog" }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null); const id = useId();
  useEffect(() => { const node = ref.current; if (!node) return; if (open && !node.open) node.showModal(); else if (!open && node.open) node.close(); }, [open]);
  return <dialog ref={ref} className="atq-dialog" data-variant={variant} aria-labelledby={id + "-title"} aria-describedby={description ? id + "-description" : undefined} onCancel={event => { event.preventDefault(); onClose(); }} onClose={() => { if (open) onClose(); }}>
    <header className="atq-card-header"><h2 id={id + "-title"}>{title}</h2><Button variant="ghost" onClick={onClose}>Cerrar</Button></header>{description && <p id={id + "-description"} className="atq-muted">{description}</p>}<div className="atq-stack">{children}</div>{actions && <footer className="atq-actions">{actions}</footer>}
  </dialog>;
}
export function Sheet(props: Omit<DialogProps, "variant">) { return <Dialog {...props} variant="sheet" />; }
export type TabItem = { id: string; label: string; content: ReactNode; disabled?: boolean };
export function Tabs({ label, items, value, onValueChange }: { label: string; items: TabItem[]; value: string; onValueChange: (id: string) => void }) {
  const base = useId(); const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const activate = (id: string) => { onValueChange(id); refs.current[id]?.focus(); };
  return <div className="atq-tabs"><div role="tablist" aria-label={label} className="atq-tablist">{items.map(item => <button key={item.id} ref={node => { refs.current[item.id] = node; }} type="button" role="tab" id={base + "-tab-" + item.id} aria-controls={base + "-panel-" + item.id} aria-selected={item.id === value} tabIndex={item.id === value ? 0 : -1} disabled={item.disabled} onClick={() => onValueChange(item.id)} onKeyDown={event => { const available = items.filter(x => !x.disabled); if (!available.length) return; const index = available.findIndex(x => x.id === item.id); let target: TabItem | undefined; if (event.key === "ArrowRight") target = available[(index + 1) % available.length]; if (event.key === "ArrowLeft") target = available[(index - 1 + available.length) % available.length]; if (event.key === "Home") target = available[0]; if (event.key === "End") target = available[available.length - 1]; if (target) { event.preventDefault(); activate(target.id); } }}>{item.label}</button>)}</div>{items.map(item => <section key={item.id} id={base + "-panel-" + item.id} role="tabpanel" aria-labelledby={base + "-tab-" + item.id} hidden={value !== item.id} tabIndex={0}>{item.content}</section>)}</div>;
}
export function Accordion({ title, children, open }: { title: string; children: ReactNode; open?: boolean }) {
  return <details className="atq-accordion" open={open}><summary>{title}</summary><div>{children}</div></details>;
}
export function Avatar({ name, src, size = "md" }: { name: string; src?: string; size?: "sm" | "md" | "lg" }) {
  const [failed, setFailed] = useState(false); useEffect(() => setFailed(false), [src]);
  return <span className="atq-avatar" data-size={size} role="img" aria-label={name}>{src && !failed ? <img src={src} alt="" onError={() => setFailed(true)} /> : <span aria-hidden="true">{name.trim().split(/\s+/).slice(0, 2).map(x => x[0] || "").join("").toUpperCase()}</span>}</span>;
}
export function Skeleton({ lines = 3, label = "Cargando contenido" }: { lines?: number; label?: string }) {
  return <div className="atq-skeleton" role="status" aria-label={label}>{Array.from({ length: Math.min(10, Math.max(1, lines)) }, (_, index) => <span key={index} aria-hidden="true" />)}</div>;
}
export function EmptyState({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return <div className="atq-empty"><h3>{title}</h3><p className="atq-muted">{description}</p>{action}</div>;
}
export function Progress({ label, value, max = 100 }: { label: string; value?: number; max?: number }) {
  return <label className="atq-progress"><span>{label}</span><progress value={value} max={max} /></label>;
}
export type Column<Row> = { key: string; header: ReactNode; render: (row: Row) => ReactNode };
export function DataTable<Row>({ columns, rows, rowKey, caption, emptyLabel = "Todavía no hay datos" }: { columns: Column<Row>[]; rows: Row[]; rowKey: (row: Row) => string; caption: string; emptyLabel?: string }) {
  return <div className="atq-table-scroll" role="region" aria-label={caption} tabIndex={0}><table className="atq-table"><caption>{caption}</caption><thead><tr>{columns.map(column => <th key={column.key} scope="col">{column.header}</th>)}</tr></thead><tbody>{rows.length ? rows.map(row => <tr key={rowKey(row)}>{columns.map(column => <td key={column.key}>{column.render(row)}</td>)}</tr>) : <tr><td colSpan={Math.max(1, columns.length)}>{emptyLabel}</td></tr>}</tbody></table></div>;
}
export function Pagination({ hasPrevious, hasNext, onPrevious, onNext, label = "Resultados" }: { hasPrevious: boolean; hasNext: boolean; onPrevious: () => void; onNext: () => void; label?: string }) {
  return <nav className="atq-pagination" aria-label={"Paginación de " + label}><Button variant="secondary" disabled={!hasPrevious} onClick={onPrevious}>Anterior</Button><span className="atq-muted">{label}</span><Button variant="secondary" disabled={!hasNext} onClick={onNext}>Siguiente</Button></nav>;
}
export function Stepper({ steps, current, label = "Etapas" }: { steps: Array<{ id: string; label: string }>; current: string; label?: string }) {
  return <ol className="atq-stepper" aria-label={label}>{steps.map((step, index) => <li key={step.id} aria-current={step.id === current ? "step" : undefined}><span aria-hidden="true">{index + 1}</span>{step.label}</li>)}</ol>;
}
export function Money({ amountLabel, currency, pendingLabel = "Importe por confirmar" }: { amountLabel?: string | null; currency?: string; pendingLabel?: string }) {
  return <span className="atq-money">{amountLabel ? <>{currency && <span className="atq-money-currency">{currency} </span>}{amountLabel}</> : pendingLabel}</span>;
}
export function DateTime({ iso, timeZone, locale = "es-AR", pendingLabel = "Fecha por confirmar" }: { iso?: string | null; timeZone?: string; locale?: string; pendingLabel?: string }) {
  const date = iso ? new Date(iso) : null;
  if (!date || Number.isNaN(date.getTime())) return <span>{pendingLabel}</span>;
  return <time dateTime={date.toISOString()}>{new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short", ...(timeZone ? { timeZone } : {}) }).format(date)}{timeZone && <span className="atq-muted"> ({timeZone})</span>}</time>;
}
export function ErrorSummary({ title = "Revisá estos datos", errors, focusKey = 0 }: { title?: string; errors: Array<{ fieldId: string; message: string }>; focusKey?: number }) {
  const ref = useRef<HTMLDivElement>(null); useEffect(() => { if (focusKey > 0) ref.current?.focus(); }, [focusKey]);
  if (!errors.length) return null;
  return <div ref={ref} className="atq-alert" data-tone="danger" role="alert" tabIndex={-1}><strong>{title}</strong><ul>{errors.map((error, index) => <li key={error.fieldId + index}><a href={"#" + error.fieldId} onClick={event => { event.preventDefault(); document.getElementById(error.fieldId)?.focus(); }}>{error.message}</a></li>)}</ul></div>;
}
