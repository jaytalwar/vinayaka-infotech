export default function Footer() {
  return (
    <footer className="border-t py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h3 className="font-bold text-lg">
            VINAYAKA INFOTECH
          </h3>

          <p className="text-sm text-muted-foreground mt-2">
            Complete IT Infrastructure Solutions Since 1995.
          </p>
        </div>

        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vinayaka Infotech.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}