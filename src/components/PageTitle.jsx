export default function PageTitle({ title, subtitle }) {
  return (
    <div className="page-title">
      <h1 className="page-title__h1">{title}</h1>
      {subtitle ? <p className="page-title__subtitle">{subtitle}</p> : null}
    </div>
  );
}
