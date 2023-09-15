//Rename to [slug].js
import React, { useEffect, useState } from "react";
import markdownToHtml from "@/lib/MarkdownToHtml";

export default function BlogPage() {
  const [blogData, setBlogData] = useState(null);
  
  let data = {
    "id": 2,
    "attributes": {
        "SortOrder": 2,
        "title": "Flutter vs React Native",
        "author": "Navin",
        "publishDate": "2023-09-12",
        "BlogData": "React Native is a project started by Facebook internally that they open-sourced in 2015. On the other side is Flutter, a project started by Google which they have been heavily promoting since I/O 2017. Both of these technologies help app developers build cross-platform apps faster by using a single programming language.\n\nReact Native is already a mature tool and has a huge community. At the same time, Flutter has also started seeing huge adoption rates since 2017.\n\nIn this post, we will compare each of them using ten criteria:\n\n- Programming language\n- Technical architecture\n- Installation\n- Setup and project configuration\n- UI components and development API\n- Developer productivity\n- Community support\n- Testing support\n- Build & release automation support\n- DevOps and CI/CD support\n- Now that we have defined all our criteria, let us start exploring each of them in detail.\n\n## 1. React Native — JavaScript",
        "createdAt": "2023-09-13T14:20:10.898Z",
        "updatedAt": "2023-09-13T14:20:14.125Z",
        "publishedAt": "2023-09-13T14:20:14.095Z"
    }
  }


  useEffect(() => {
    const fetchMarkdownData = async () => {
      if (data) {
        const result = await markdownToHtml(data?.attributes?.BlogData);
        setPlot(result);
      }
    };

    fetchMarkdownData();
  }, [data]);

  return (
    <div>
      <h2>Plot</h2>
      <div
        className="font-normal text-sm"
        dangerouslySetInnerHTML={{ __html: plot }}
      />
      
    </div>
  );
}
