import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutSidebar from "./sidebar";

interface ILayoutProps {
  children: JSX.Element;
}

const HIDDEN_HEADER = ["/section17/one"];

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();

  console.log(router);

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ display: "flex" }}>
        <LayoutSidebar />
        <div style={{ width: "60%" }}>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
