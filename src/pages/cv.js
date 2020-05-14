import React from "react"
import Layout from "../components/Layout"

const ClientSideOnlyLazyCV = React.lazy(() =>
  import("../components/Content/CV/CV")
)

const cv = () => {
  const isSSR = typeof window === "undefined"
  return (
    <Layout>
      {!isSSR && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <ClientSideOnlyLazyCV />
        </React.Suspense>
      )}
    </Layout>
  )
}

export default cv
