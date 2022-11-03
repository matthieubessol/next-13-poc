/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function OgImage () {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 34,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        
        <img alt="frank" src="https://media.senscritique.com/media/media/000020842494/0/avatar.jpg" width="100%" className="object-cover"/>
        <div style={{
          background: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0) 100%, rgba(9,9,121,0) 100%, rgba(9,9,121,1) 100%)",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0
        }} />
        <p style={{
          color: "white",
          position: "absolute",
          bottom: '20px',
          left: '20px',
          margin: 0, padding:0
        }}>Mdrjpptchou a mis 8/10</p>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
