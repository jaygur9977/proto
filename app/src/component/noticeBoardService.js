export const noticeBoardService = {
  getCards() {
    try {
      const cards = localStorage.getItem('notice_board_cards');
      return cards ? JSON.parse(cards) : [];
    } catch (error) {
      console.error('Error loading cards:', error);
      return [];
    }
  },

  saveCards(cards) {
    try {
      localStorage.setItem('notice_board_cards', JSON.stringify(cards));
    } catch (error) {
      console.error('Error saving cards:', error);
    }
  },
};
