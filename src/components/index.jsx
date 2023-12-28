import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>Qr Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder="type some text here.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim !== "" ? false : true}
          onClick={handleGenerateQrCode}>
          Generate Qr Code
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
