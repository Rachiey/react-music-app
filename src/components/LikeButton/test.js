import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LikeButton } from '.';
describe('LikeButton', () => {
    beforeEach(() => {
        render(<LikeButton />);
    })
    test('renders a paragraph with the word Like in it', () => {
        let word = screen.getByLabelText('paragraph');
        expect(word.textContent).toContain('Like');
    })
    test('renders a span with a heart in it', () => {
        let heart = screen.queryByRole('switch');
        expect(heart.textContent).toContain('♥');
    })
    test('changes colour of heart when click', () => {
        let heart = screen.queryByRole('switch');
        let startingColour = heart.style.color;
        userEvent.click(heart) //userEvent was exported in the global index.js
        let newColour = heart.style.color;
        expect(newColour).not.toBe(startingColour);
        userEvent.click(heart)
        let nextColour = heart.style.color;
        expect(nextColour).toBe(startingColour);
    })
})