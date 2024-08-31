import React from "react";
import styles from "./styles.module.scss";

function Footer2() {
  return (
    <div className="bg-black p-2">
      <footer className={styles.footer}>
        <div className={styles.containerFooter}>
          <div className={styles.icons}></div>
          <ul className={styles.details}>
            <li>Perguntas frequentes</li>
            <li>Relações com Investidores</li>
            <li>Privacidade</li>
            <li>Teste sua Rede</li>
            <li>Centro de Ajuda</li>
            <li>Trabalhe Conosco</li>
            <li>Preferência de Cookies</li>
            <li>Direitos Legais</li>
            <li>Conta</li>
            <li>Formas de Assistir</li>
            <li>Sobre a Empresa</li>
            <li>Termos de uso</li>
            <li>Fale Conosco</li>
            <li>Exclusivo na Netflix</li>
            <li>iOS</li>
            <li>Android</li>
          </ul>
          <div className={styles.security}>
            <div>Português</div>
            <span>© 1997-2024 Netflix, Inc.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer2;
