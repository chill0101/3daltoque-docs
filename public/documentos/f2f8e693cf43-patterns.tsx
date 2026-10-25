"use client";

import { useId } from "react";
import type { FormEvent, ReactNode } from "react";
import { Alert, Badge, Button, Card, EmptyState, Money, Progress, RadioGroup, TextArea } from "./components";
import type { RadioOption, Tone } from "./components";

export function FileDropzone({ label, accept, multiple = false, disabled = false, onFiles }: { label: string; accept?: string; multiple?: boolean; disabled?: boolean; onFiles: (files: File[]) => void }) {
  const id = useId();
  return <div className="atq-dropzone" data-disabled={disabled || undefined} onDragOver={event => { event.preventDefault(); }} onDrop={event => { event.preventDefault(); if (disabled) return; const files = Array.from(event.dataTransfer.files); onFiles(multiple ? files : files.slice(0, 1)); }}>
    <label htmlFor={id}><strong>{label}</strong><span>Arrastrá un archivo o seleccionalo desde tu equipo.</span></label><input id={id} type="file" accept={accept} multiple={multiple} disabled={disabled} onChange={event => { const files = Array.from(event.currentTarget.files || []); if (files.length) onFiles(files); event.currentTarget.value = ""; }} />
  </div>;
}
export function FileItem({ name, status, detail, progress, onRemove, onRetry }: { name: string; status: "selected" | "uploading" | "processing" | "ready" | "error"; detail?: string; progress?: number; onRemove?: () => void; onRetry?: () => void }) {
  const labels = { selected: "Seleccionado", uploading: "Cargando", processing: "En análisis", ready: "Habilitado", error: "Requiere corrección" };
  return <div className="atq-file-item"><div><strong>{name}</strong><p className="atq-muted">{detail}</p><Badge tone={status === "error" ? "danger" : status === "ready" ? "success" : "info"}>{labels[status]}</Badge></div><div className="atq-actions">{onRetry && <Button variant="secondary" onClick={onRetry} aria-label={"Reintentar " + name}>Reintentar</Button>}{onRemove && <Button variant="ghost" onClick={onRemove} aria-label={"Quitar " + name}>Quitar</Button>}</div>{(status === "uploading" || status === "processing") && <Progress label={labels[status]} value={status === "uploading" ? progress : undefined} />}</div>;
}
export function OfferCard({ makerName, amountLabel, currency, deadline, expiry, version, statusLabel = "Oferta disponible", onSelect, disabled = false }: { makerName: string; amountLabel?: string | null; currency?: string; deadline: string; expiry: string; version: string; statusLabel?: string; onSelect: () => void; disabled?: boolean }) {
  return <Card title={makerName} actions={<Badge tone={disabled ? "warning" : "info"}>{statusLabel}</Badge>}><p><Money amountLabel={amountLabel} currency={currency} /></p><dl className="atq-definition"><div><dt>Plazo</dt><dd>{deadline}</dd></div><div><dt>Vigencia</dt><dd>{expiry}</dd></div><div><dt>Versión</dt><dd>{version}</dd></div></dl><Button onClick={onSelect} disabled={disabled}>Revisar oferta</Button></Card>;
}
export function OrderTimeline({ items }: { items: Array<{ id: string; title: string; dateLabel: string; detail?: string }> }) {
  return <ol className="atq-timeline">{items.map(item => <li key={item.id}><strong>{item.title}</strong><span className="atq-muted">{item.dateLabel}</span>{item.detail && <p>{item.detail}</p>}</li>)}</ol>;
}
export function MessageBubble({ author, text, timeLabel, status, own = false }: { author: string; text: string; timeLabel: string; status?: string; own?: boolean }) {
  return <article className="atq-message" data-own={own || undefined}><header><strong>{author}</strong><span className="atq-muted">{timeLabel}</span></header><p>{text}</p>{status && <span className="atq-message-status">{status}</span>}</article>;
}
export function ChatComposer({ value, onValueChange, onSend, busy = false, disabled = false, error }: { value: string; onValueChange: (value: string) => void; onSend: () => void; busy?: boolean; disabled?: boolean; error?: string }) {
  return <form className="atq-chat-composer" onSubmit={event => { event.preventDefault(); if (value.trim() && !busy && !disabled) onSend(); }}><TextArea label="Mensaje del pedido" value={value} onChange={event => onValueChange(event.target.value)} disabled={disabled} error={error} rows={3} /><Button type="submit" loading={busy} disabled={disabled || !value.trim()}>Enviar mensaje</Button></form>;
}
export type EvidenceItem = { id: string; url: string; alt: string; kind: "image" | "video" };
export function EvidenceGallery({ items, onMediaError }: { items: EvidenceItem[]; onMediaError?: (id: string) => void }) {
  if (!items.length) return <EmptyState title="Evidencia pendiente" description="Los archivos presentados aparecerán en esta revisión." />;
  return <div className="atq-evidence-grid">{items.map(item => <figure key={item.id}>{item.kind === "video" ? <video controls preload="metadata" aria-label={item.alt} src={item.url} onError={() => onMediaError?.(item.id)} /> : <a href={item.url} target="_blank" rel="noreferrer" aria-label={"Abrir evidencia: " + item.alt}><img src={item.url} alt={item.alt} loading="lazy" onError={() => onMediaError?.(item.id)} /></a>}<figcaption>{item.alt}</figcaption></figure>)}</div>;
}
export function ReviewDecisionPanel({ revisionLabel, onApprove, onObserve, busy = false, disabled = false }: { revisionLabel: string; onApprove: () => void; onObserve: () => void; busy?: boolean; disabled?: boolean }) {
  return <Card title="Revisar el resultado" description={revisionLabel}><p>Consultá la evidencia de esta revisión y elegí una acción.</p><div className="atq-actions"><Button onClick={onApprove} disabled={disabled} loading={busy}>Aprobar resultado</Button><Button variant="secondary" onClick={onObserve} disabled={disabled || busy}>Registrar observaciones</Button></div></Card>;
}
export function FounderBadge({ label = "Maker fundador" }: { label?: string }) { return <Badge tone="info">{label}</Badge>; }
export function MembershipCard({ statusLabel, periodLabel, priceLabel, founder = false, action }: { statusLabel: string; periodLabel: string; priceLabel: string; founder?: boolean; action?: ReactNode }) {
  return <Card title="Tu membresía" actions={founder ? <FounderBadge /> : undefined}><Badge tone="info">{statusLabel}</Badge><p>{periodLabel}</p><p className="atq-money">{priceLabel}</p><p className="atq-muted">Renovación manual del abono.</p>{action}</Card>;
}
export function QueueItem({ title, stateLabel, dateLabel, detail, action }: { title: string; stateLabel: string; dateLabel: string; detail?: string; action?: ReactNode }) {
  return <Card title={title} actions={<Badge>{stateLabel}</Badge>}><p className="atq-muted">{dateLabel}</p>{detail && <p>{detail}</p>}{action}</Card>;
}
export function MetricCard({ label, valueLabel, periodLabel, sourceLabel }: { label: string; valueLabel: string; periodLabel: string; sourceLabel: string }) {
  return <Card title={label}><p className="atq-metric-value">{valueLabel}</p><p>{periodLabel}</p><p className="atq-muted">{sourceLabel}</p></Card>;
}
export function MapLocationPicker({ label, map, summary, onConfirm, disabled = false }: { label: string; map?: ReactNode; summary: string; onConfirm: () => void; disabled?: boolean }) {
  const id = useId();
  return <section className="atq-location" aria-labelledby={id}><h3 id={id}>{label}</h3><div className="atq-map-slot">{map || <p className="atq-muted">La vista geográfica se presenta mediante el proveedor seleccionado.</p>}</div><p>{summary || "Elegí una ubicación para confirmar."}</p><Button onClick={onConfirm} disabled={disabled || !summary}>Confirmar ubicación</Button></section>;
}
export function AppShell({ brand, navigation, header, children, aside, theme = "light" }: { brand: ReactNode; navigation: ReactNode; header?: ReactNode; children: ReactNode; aside?: ReactNode; theme?: "light" | "dark" }) {
  const id = useId();
  return <div className="atq-ui atq-shell" data-atq-theme={theme}><a className="atq-skip" href={"#" + id}>Ir al contenido</a><header className="atq-shell-header"><div className="atq-brand">{brand}</div>{header}</header><nav className="atq-shell-nav" aria-label="Navegación principal">{navigation}</nav><main className="atq-shell-main" id={id} tabIndex={-1}>{children}</main>{aside && <aside className="atq-shell-aside">{aside}</aside>}</div>;
}
export function RatingInput(props: { label: string; options: RadioOption[]; value?: string; onValueChange: (value: string) => void; error?: string; disabled?: boolean }) { return <RadioGroup {...props} />; }
export function FilterBar({ label = "Filtros", children, onSubmit, onReset }: { label?: string; children: ReactNode; onSubmit: (event: FormEvent<HTMLFormElement>) => void; onReset?: () => void }) {
  return <form className="atq-filter-bar" aria-label={label} onSubmit={onSubmit} onReset={onReset}>{children}<div className="atq-actions"><Button type="submit">Aplicar filtros</Button>{onReset && <Button type="reset" variant="ghost">Limpiar</Button>}</div></form>;
}
export type ToastItem = { id: string; title: string; detail?: string; tone?: Tone };
export function ToastRegion({ items, onDismiss }: { items: ToastItem[]; onDismiss: (id: string) => void }) {
  return <section className="atq-toast-region" aria-label="Avisos recientes" aria-live="polite" aria-relevant="additions text">{items.map(item => <div className="atq-toast" data-tone={item.tone || "info"} key={item.id}><div><strong>{item.title}</strong>{item.detail && <p>{item.detail}</p>}</div><Button variant="ghost" onClick={() => onDismiss(item.id)} aria-label={"Cerrar aviso: " + item.title}>Cerrar</Button></div>)}</section>;
}
export function PermissionGate({ allowed, fallback, children }: { allowed: boolean; fallback?: ReactNode; children: ReactNode }) {
  return allowed ? <>{children}</> : <>{fallback || <Alert title="Acción restringida" tone="warning">Consultá los permisos disponibles para este recurso.</Alert>}</>;
}
