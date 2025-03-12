import { useFetch } from "../../hooks/useFetchs";
import Turn from "../Turn/Turn";

const LazyDataLoader = () => {
  const { data: turns, error, loading } = useFetch(`turns/`);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {turns?.map((turn) => (
        <Turn key={turn.id} turn={turn} />
      ))}
    </div>
  );
};

export default LazyDataLoader;
