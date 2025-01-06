/**
 *
 * "children" must be wrapped with {``} !!
 */

export default function MonoTextsWrapper({ children }) {
  return (
    <div
      style={{
        flexGrow: "1",
        flexShrink: "1",
        textAlign: "left",
        fontFamily:
          '"SFMono-Regular", "Menlo", "Consolas", "&quot;PT Mono&quot;", "&quot;Liberation", "Mono&quot;", "Courier", "monospace"',
        fontSize: "75%",
        tabSize: "2",
        minHeight: "1em",
        color: "rgb(55, 53, 47)",
        whiteSpace: "pre",
      }}
    >
      <code>{children}</code>
    </div>
  );
}
