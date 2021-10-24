// 클라이언트 단에서만 실행되도록 플러그인 이름에 client.js 입력

import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState()(store)
}