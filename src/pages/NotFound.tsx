import { url } from "@/constants/routes";

export function NotFound() {
  // const searchParams = new URLSearchParams(window.location.search);
  // const redirectPath = searchParams.get('redirect');
  // console.log('searchParams notfound: ', redirectPath)

  // if (redirectPath && redirectPath !== '/') {
  //   window.history.replaceState(null, '', redirectPath);
  // }

  return (
    <p>This route not found, come back to <a href={url.base + url.index} className="text-red-500 underline">home</a></p>
  )
}