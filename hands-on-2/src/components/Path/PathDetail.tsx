import { Path } from "./Path";
import type { PathProps } from "./Path"

type PathDetailProps = {
    pathItems: PathProps[];
    pathTitle: String,
}

function PathDetail ({ pathItems, pathTitle }: PathDetailProps) {
    return (
        <section>
        <h2>{pathTitle}</h2>
        <div>
          {pathItems.map((item, index) => (
            <Path
              key={index}
              banner={item.banner}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    )
}

export { PathDetail };