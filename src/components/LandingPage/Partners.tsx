import Image from 'next/image';
import styles from './Partners.module.css';

const clients = [
  { name: 'Tahrshop', logo: '/Clients/Tahrshop.png' },
  { name: 'Nexvyon', logo: '/Clients/Nexvyon.png' },
  { name: 'Symphony Bali Spa', logo: '/Clients/logo.png' },
  { name: 'Koothan', logo: '/Clients/koothan.png' },
];

const Partners = () => {
  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <p className={styles.label}>Trusted by Our Clients</p>
        <div className={styles.logoRow}>
          {clients.map((client) => (
            <div key={client.name} className={styles.logoItem}>
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={64}
                className={styles.logoImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
