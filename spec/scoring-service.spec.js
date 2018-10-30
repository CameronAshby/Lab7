let ScoringService = require("../js/scoring-service");

describe('ScoringService', () => {
  let scoringService;

  beforeEach(() => {
    scoringService = new ScoringService();
  });

  describe('calculateScoreRelativeToPar', () => {
    it('calculates under par score correctly', () => {
      let par = 72;
      let playerScores = Array(18).fill(3, 0, 18);
      let scoreRelativeToPar = scoringService.calculateScoreRelativeToPar(par, playerScores);
      expect(scoreRelativeToPar).toEqual(-18);
    });
    it('calculates over par score correctly', () => {
      let par = 72;
      let playerScores = Array(18).fill(5, 0, 18);
      let scoreRelativeToPar = scoringService.calculateScoreRelativeToPar(par, playerScores);
      expect(scoreRelativeToPar).toEqual(18);
    });
    it('returns a number', () => {
      let par = 72;
      let playerScores = Array(18).fill(5, 0, 18);
      let scoreRelativeToPar = scoringService.calculateScoreRelativeToPar(par, playerScores);
      expect(typeof scoreRelativeToPar).toEqual('number');
    });
    it('calculates even when no scores', () => {
      let par = 72;
      let playerScores = Array(18);
      let scoreRelativeToPar = scoringService.calculateScoreRelativeToPar(par, playerScores);
      expect(scoreRelativeToPar).toEqual(-72);
    });
  });
    describe('calculateOutScore', () => {
        it('calculates score', () => {
            let playerScores = Array(9).fill(3, 0, 9);
            let outScore = scoringService.calculateOutScore(playerScores);
            expect(outScore).toEqual(27);
        });
        it('returns a number', () => {
            let playerScores = Array(9).fill(5, 0, 9);
            let outScore = scoringService.calculateOutScore(playerScores);
            expect(typeof outScore).toEqual('number');
        });
    });
    describe('calculateInScore', () => {
        it('calculates score', () => {
            let playerScores = Array(9).fill(3, 0, 9);
            let inScore = scoringService.calculateInScore(playerScores);
            expect(inScore).toEqual(27);
        });
        it('returns a number', () => {
            let playerScores = Array(9).fill(5, 0, 9);
            let inScore = scoringService.calculateInScore(playerScores);
            expect(typeof inScore).toEqual('number');
        });
    });
    describe('calculateTotalScore', () => {
        it('calculates total score', () => {
            let playerScores = Array(18).fill(3, 0, 18);
            let totalScore = scoringService.calculateTotalScore(playerScores);
            expect(totalScore).toEqual(54);
        });
        it('returns a number', () => {
            let playerScores = Array(18).fill(5, 0, 18);
            let totalScore = scoringService.calculateTotalScore(playerScores);
            expect(typeof totalScore).toEqual('number');
        });
    });
});
