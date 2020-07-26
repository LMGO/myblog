import request from 'axios'
import {serverUrl} from '../utils/env'

/*注册*/
const signup = data => {
  return request({
    url: serverUrl + '/user/signup',
    method: 'post',
    data
  })
}

/*登录*/
const signin = data => {
  return request({
    url: serverUrl + '/user/signin',
    method: 'post',
    data
  })
}
export {
  signup,
  signin,
//   addMessage,
//   getAllMessages,
//   getTimeAxis,
//   getAllArticles,
//   getArticleByTitle,
//   getArticlesByType,
//   getArticlesTypeInTS,
//   viewArticle,
//   likeArticle,
//   commentArticle,
//   getMyProfile
}