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
  { name: "Charvi Boutique", logo: "/Clients/logo.png" },
  {
    name: "Koothan Infotech",
    logo: "/Clients/koothan.png",
    wide: true,
  },
];

export default function ClientsSection() {
  return (
    <section className={styles.clientsSection}>
      <h2 className={styles.title}>Trusted by Our Clients</h2>
      <link rel="stylesheet" href="" />
        <div className={styles.clientsGrid}>
          {clients.map((client) => (
            <div>
              <div
                key={client.name}
                className={`${styles.clientLogo} ${
                  client.wide ? styles.wideLogo : ""
                }`}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={90}
                  className={styles.logo}
                />
              </div>
            </div>

          ))}
        </div>
        <div className={styles.clientsGrid}>
          {clients.map((client) => (
            <div>
              <div
                key={client.name}
                // className={`${styles.clientLogo} ${
                //   client.wide ? styles.wideLogo : ""
                // }`}
              >
                <h4 className={styles.clientname}>{client.name}</h4>
                {/* <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={90}
                  className={styles.logo}
                /> */}
              </div>
            </div>

          ))}
        </div>
    </section>
  );
}
