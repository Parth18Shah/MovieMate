const { formatReviewsData } = require('./utils');

describe('formatReviewsData', () => {
    test('formats reviews data correctly', () => {
        const reviewsData = [
            { created_at: '2023-04-23T05:58:55.912Z', content: 'Review 1' },
            { created_at: '2023-04-24T10:15:30.456Z', content: 'Review 2' }
        ];

        const formattedData = formatReviewsData(reviewsData);

        expect(formattedData).toHaveLength(reviewsData.length);

        formattedData.forEach((review, index) => {
            expect(review.formattedDate).toBeDefined();
            expect(review.formattedTime).toBeDefined();

            const createdAt = new Date(reviewsData[index].created_at);
            const formattedDate = createdAt.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' });
            const formattedTime = createdAt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

            expect(review.formattedDate).toBe(formattedDate);
            expect(review.formattedTime).toBe(formattedTime);
        });
    });
});