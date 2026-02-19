import Image from "next/image";
import styles from "./ClientsSection.module.css";

type Client = {
  name: string;
  logo: string;
  wide?: boolean;
};

const clients: Client[] = [
  { name: "Tahrshop", logo: "/Clients/Tahrshop.png" },
  { name: "Nexvyon", logo: "/Clients/Nexvyon.png" },
  { name: "Symphony Bali Spa", logo: "/Clients/logo.png" },
];

export default function ClientsSection() {
  return (
    <section className={styles.clientsSection}>
      <h2 className={styles.title}>Trusted by Our Clients</h2>

      <div className={styles.clientsGrid}>
        {clients.map((client) => (
          <div
            key={client.name}
            className={`${styles.clientCard} ${
              client.wide ? styles.wideLogo : ""
            }`}
          >
          <Image
            src={client.logo}
            alt={client.name}
            width={200}
            height={100}
            className={styles.logo}
          />
            <h4 className={styles.clientname}>{client.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
