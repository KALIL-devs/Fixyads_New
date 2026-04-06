import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/portfolio' },
    title: 'Portfolio | Our Work & Case Studies',
    description: 'See how we have helped businesses grow with our digital marketing and web development services.',
};

export default function PortfolioPage() {
    const projects = [
        { id: 1, title: 'E-commerce Growth', category: 'SEO & PPC', result: '+200% Sales' },
        { id: 2, title: 'Tech Startup Branding', category: 'Branding & SMM', result: '10k+ Followers' },
        { id: 3, title: 'Corporate Website', category: 'Web Development', result: '40% Faster Load Time' },
        { id: 4, title: 'Local Restaurant', category: 'Local SEO', result: '#1 Ranking' },
    ];

    return (
        <div className="container section">
            <h1 className="text-center mb-4">Our Portfolio</h1>
            <p className="text-center mb-4" style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 4rem' }}>
                Real results for real businesses. Check out some of our success stories.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                {projects.map(project => (
                    <div key={project.id} style={{ position: 'relative', height: '300px', background: '#f0f0f0', borderRadius: 'var(--radius)', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
                        <div style={{ background: 'white', padding: '1.5rem', width: '100%', margin: '1rem', borderRadius: 'var(--radius)', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                            <div style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: '600' }}>{project.category}</div>
                            <h3 style={{ margin: '0.25rem 0' }}>{project.title}</h3>
                            <div style={{ fontWeight: 'bold', color: 'green' }}>Result: {project.result}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
