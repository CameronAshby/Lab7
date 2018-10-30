module.exports =  class ScoringService {
    calculateScoreRelativeToPar(par, scores) {
        return scores.map((score) => (score ? score : 0)).reduce((a, b) => a + b, 0) - par;
    }
    calculateOutScore(scores) {
        return scores.reduce((a, b) => a + b);
    }
    calculateInScore(scores) {
        return scores.reduce((a, b) => a + b);
    }
    calculateTotalScore(scores) {
        return scores.reduce((a, b) => a + b);
    }
};