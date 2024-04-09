import Giscus from "@giscus/react";
import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Comments() {
    let { theme } = useContext(ThemeContext)
    return (
        <Giscus
            id="comments"
            repo="Saquib1973/portfolio"
            repoId="R_kgDOLYyoPA="
            category="Q&A"
            categoryId="DIC_kwDOLYyoPM4CekbN-hVS"
            mapping="pathname"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme={theme}
            lang="en"
            loading="lazy"
        />
    );
}

