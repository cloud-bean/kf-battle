import types from './mutation-types';
import { initialState } from './state';
import { rand } from '../../../utils/rand';
const countLevel = (state, level) => state.cardPool.filter(card => card.level === level).length;

export default {
  [types.resetState](state) {
    const initial = initialState();
    Object.keys(state).forEach(key => {
      state[key] = initial[key];
    });
  },
  [types.FETCH_DATA](state) {
    state.loading = true;
  },
  [types.GOT_DATA](state) {
    state.loading = false;
  },
  [types.FETCH_CARDPOOL](state, payload) {
    state.cardPool = payload.cardPool;
  },
  [types.RANDOM_INDEX](state, level) {
    let index = -1;
    switch (level) {
      case 1:
        if (countLevel(state, 1) === 0) {
          index = -1;
        } else {
          index = 0 + rand(countLevel(state, 1)) - 1;
        }
        break;
      case 2:
        if (countLevel(state, 2) === 0) {
          index = -1;
        } else {
          index = countLevel(state, 1) + rand(countLevel(state, 2)) - 1;
        }
        break;
      case 3:
        if (countLevel(state, 3) === 0) {
          index = -1;
        } else {
          index = countLevel(state, 1) +
            countLevel(state, 2) + rand(countLevel(state, 3)) - 1;
        }
        break;
      default:
        break;
    }
    console.log(`level:${level},card index:${index},card:${state.cardPool[index].name}`);
    state.randomCardIndex = index;
  },
};
