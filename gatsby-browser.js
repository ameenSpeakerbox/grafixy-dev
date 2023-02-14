import './src/style/global.css'
import "swiper/css";
import "swiper/css/navigation";

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}

export const registerServiceWorker = () => true