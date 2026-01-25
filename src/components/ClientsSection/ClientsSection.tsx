import Image from "next/image";
import styles from "./ClientsSection.module.css";

type Client = {
  name: string;
  logo: string;
  wide?: boolean;
};

const clients: Client[] = [
  {
    name: "Tahrshop",
    logo: "/Clients/Tahrshop.png",
  },
  {
    name: "Nexvyon",
    logo: "/Clients/Nexvyon.png",
  },
  {
    name: "Charvi Boutique",
    logo: "/Clients/logo.png",
  },
  {
    name: "Koothan Infotech",
    logo: "/Clients/koothan.png",
    wide: true, // wide text-based logo
  },
];

export default function ClientsSection() {
  return (
    <section className={styles.clientsSection}>
      <h2 className={styles.title}>Our Clients</h2>

      <div className={styles.clientsGrid}>
        {clients.map((client) => (
          <div
            key={client.name}
            className={`${styles.clientLogo} ${
              client.wide ? styles.wideLogo : ""
            }`}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={160}
              height={80}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
