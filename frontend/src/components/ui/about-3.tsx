interface aboutProps {
  title?: string
  description?: string
}




export const About = ({
  title = "About Us",
  description = "Welcome to Zordie AI",
}: aboutProps = {}) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-14 grid gap-5 text-center">
          <h1 className="text-5xl font-semibold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="text-center py-10">
          <p>Content coming soon</p>
        </div>
      </div>
    </section>
  )
}
