import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/testimonials' },
    title: 'Testimonials | Student & Client Reviews',
    description: 'Read what our students and clients have to say about our training and services.',
};

export default function TestimonialsPage() {
    const reviews = [
        { id: 1, name: 'Sarah Johnson', role: 'CEO, TechStart', text: 'The team transformed our online presence. Our leads increased by 200% in just 3 months!', type: 'Client' },
        { id: 2, name: 'Rahul Verma', role: 'Student', text: 'The Digital Marketing course was a game-changer for my career. I got placed immediately after completion.', type: 'Student' },
        { id: 3, name: 'Mike Chen', role: 'Founder, GreenEats', text: 'Professional, timely, and results-driven. Highly recommend their SEO services.', type: 'Client' },
        { id: 4, name: 'Priya Singh', role: 'Student', text: 'The Java course is excellent. The instructor explains concepts very clearly and the projects are very helpful.', type: 'Student' },
        { id: 5, name: 'David Lee', role: 'Marketing Manager', text: 'Best agency we have worked with. They understand our business needs perfectly.', type: 'Client' },
        { id: 6, name: 'Anita Das', role: 'Student', text: 'I learnt so much in the 3 months. The placement support is also very good.', type: 'Student' },
    ];

    return (
        <div className="container section">
            <h1 className="text-center mb-4">Testimonials</h1>
            <p className="text-center mb-4" style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 4rem' }}>
                Don't just take our word for it. Here is what our community says.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {reviews.map(review => (
                    <div key={review.id} style={{ background: '#f9fafb', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                        <div style={{ marginBottom: '1rem', display: 'inline-block', padding: '0.25rem 0.75rem', background: review.type === 'Student' ? '#e0f2fe' : '#f0fdf4', color: review.type === 'Student' ? '#0056b3' : '#166534', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '600' }}>
                            {review.type}
                        </div>
                        <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: '#444' }}>"{review.text}"</p>
                        <div style={{ fontWeight: '600' }}>{review.name}</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>{review.role}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
