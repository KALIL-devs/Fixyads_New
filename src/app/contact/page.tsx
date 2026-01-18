import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Contact Us | Get a Free Quote',
    description: 'Get in touch with us for digital marketing services or training inquiries. Visit our office or drop us a message.',
};

export default function ContactPage() {
    return (
        <>
            <div className="container section">
                <div className={styles.grid}>
                    <div>
                        <h1 className="mb-4" style={{color: '#15b597'}}>Get In Touch</h1>
                        <p className="mb-4" style={{ fontSize: '1.2rem', color: 'var(--muted)' }}>
                            Have a project in mind or want to enroll in a course? Fill out the form or contact us directly.
                        </p>

                        {/* <div className={styles.infoItem}>
                            <h3>📍 Visit Us</h3>
                            <p>123 Business Avenue, Tech City, State, 123456</p>
                        </div> */}

                        <div className={styles.infoItem}>
                            <h3>📞 Call Us</h3>
                            <p>+91 84380 83853</p>
                            {/* <p>+91 98765 43211</p> */}
                        </div>

                        <div className={styles.infoItem}>
                            <h3>📧 Email Us</h3>
                            <p>fixyads@gmail.com</p>
                            {/* <p>support@agency.com</p> */}
                        </div>
                    </div>

                    <div className={styles.formWrapper}>
                        <h2 className="mb-4" style={{color: '#15b597'}}>Send us a Message</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
}
