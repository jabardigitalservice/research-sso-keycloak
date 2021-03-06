export default function ({ $axios, redirect }) {
  $axios.setBaseURL(process.env.apiUrl)
  $axios.setHeader('Accept', 'application/json')

  $axios.onRequest((config) => {
    // console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
