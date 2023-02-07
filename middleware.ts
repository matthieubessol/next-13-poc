// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { User } from "./pages/api/rights";

const WEB_URL = "http://localhost:3000";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/carousel")) {
    const users: User[] = await fetch(`${WEB_URL}/api/rights`).then((res) =>
      res.json()
    );

    if (users.find((user) => user.id === 1)?.role === "admin") {
      return NextResponse.next();
    }

    return new NextResponse(
      JSON.stringify({ success: false, message: "authentication failed" }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }

  if (request.nextUrl.pathname.startsWith("/api/post/2")) {
    return new NextResponse(
      JSON.stringify({ success: false, message: "authentication failed" }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }

  return NextResponse.next();
}
