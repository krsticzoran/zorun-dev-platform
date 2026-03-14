"use client";
import { Container } from "../container";

export function Footer() {
  return (
    <footer className="bg-black ">
      <Container>
        <div className="py-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Trkačke priče. Sva prava zadržana.
        </div>
      </Container>
    </footer>
  );
}
