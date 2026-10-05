// Rendered on the server for every request, so you can see it's a live Next.js server.
export const dynamic = "force-dynamic";

// Change this line, push, and press Redeploy to ship a new version.
const MESSAGE = "Hello from Next.js on Naijacloud.";

export default function Home() {
  const renderedAt = new Date().toUTCString();
  // Read at request time, so a new value shows up after the next deploy.
  const appMessage = process.env.APP_MESSAGE;
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "48px 8vw",
        background: "#F3F5F4",
        color: "#0B100D",
      }}
    >
      <p style={{ fontSize: 14, fontWeight: 600, letterSpacing: ".09em", textTransform: "uppercase", color: "#006A3F" }}>
        Naijacloud sample · Next.js
      </p>
      <h1 style={{ fontSize: "clamp(40px, 7vw, 88px)", lineHeight: 1, letterSpacing: "-.035em", margin: "18px 0 0", maxWidth: 1000, fontWeight: 600 }}>
        {MESSAGE}
      </h1>
      <p style={{ fontSize: 20, color: "#4A5651", marginTop: 24, maxWidth: 720, lineHeight: 1.5 }}>
        This page was rendered on the server at <strong style={{ color: "#0B100D" }}>{renderedAt}</strong>.
      </p>
      <p style={{ fontSize: 18, marginTop: 28, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", color: "#0B100D" }}>
        APP_MESSAGE ={" "}
        <span style={{ background: appMessage ? "#E2F1E8" : "#ECF0ED", color: appMessage ? "#006A3F" : "#4A5651", padding: "4px 10px", borderRadius: 8 }}>
          {appMessage ? `"${appMessage}"` : "not set"}
        </span>
      </p>
      <p style={{ fontSize: 16, color: "#4A5651", marginTop: 32 }}>
        Edit <code>app/page.tsx</code>, push, and press Redeploy.
      </p>
    </main>
  );
}
