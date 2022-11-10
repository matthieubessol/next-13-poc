/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function OgImage() {
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
        <img
          alt="frank"
          src="https://media.senscritique.com/media/000020678578/1200/pacifiction_tourment_sur_les_iles.jpg"
          width="100%"
          height="600px"
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            left: "80px",
            bottom: "80px",
          }}
        >
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img
            src="https://media.senscritique.com/media/media/000021005920/170x170/avatar.jpg"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              border: "4px solid rgb(0, 255, 83)",
              zIndex: "1",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.3)",
              border: "4px solid rgb(0, 255, 83)",
              width: "250px",
              height: "130px",
              marginLeft: "20px",
              zIndex: "0",
            }}
          >
            <span
              style={{
                fontSize: 100,
                fontWeight: "bold",
                color: "rgb(0, 255, 83)",
              }}
            >
              8
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
