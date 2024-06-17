import '@testing-library/jest-dom';
import Root from './page';
import { render } from '@testing-library/react';

describe('Root layout', () => {
    it('should render festivals list', async () => {
        // @ts-ignore
        global.fetch = async () => ({
            json: async () => ({})
        });

        const RenderedPage = await Root();
        const { container } = render(RenderedPage);

        expect(container).not.toBeEmptyDOMElement();
    });
});
