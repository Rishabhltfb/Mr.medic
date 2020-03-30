import React from "react";

export default function Footer() {
  return (
        <footer className="text-white p-4 text-center" style={{backgroundColor:"#007bff"}}>
          <strong>Copyright &copy; {new Date().getFullYear()}. Made by CodeVedas</strong>
        </footer>
  );
}
