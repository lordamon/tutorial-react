import { useEffect, useState } from "react";

type RandomUser = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
};

const mySleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchRandomUser = async (): Promise<RandomUser> => {
  const res = await fetch("https://randomuser.me/api");

  if (!res.ok) {
    throw new Error(`Errore HTTP: ${res.status}`);
  }

  const data = await res.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("Nessun utente trovato");
  }

  return data.results[0];
};

const Spinner = () => (
  <div className="m-4 flex">
    <div className="border-4 border-t-4 border-gray-300 border-t-gray-800 rounded-full w-8 h-8 animate-spin" />
  </div>
);

export const RandomUser = () => {
  const [user, setUser] = useState<RandomUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadUser2 = async () => {
    setLoading(true);
    setError(null);

    try {
      await mySleep(1000); // ⏳ aspetta 1 secondo
      const user = await fetchRandomUser();
      setUser(user);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Errore sconosciuto");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadUser = async () => {
      try {
        setLoading(true);
        setError(null);
        await mySleep(1000); // ⏳ aspetta 1 secondo
        const user = await fetchRandomUser();

        console.log("loadUser after:" + isMounted);
        if (isMounted) {
          setUser(user);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Errore sconosciuto");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadUser();
    console.log("loadUser:" + isMounted);

    // Cleanup: annulla il setState se il componente viene smontato
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="my-3">
      <h2 className="text-3xl">Random User</h2>
      {loading && <Spinner />}
      {error && <div style={{ color: "red" }}>Errore: {error}</div>}
      {user && !loading && !error && (
        <>
          <img className="rounded-2xl" src={user.picture.large} alt="User" />
          <div>
            <strong>Name:</strong> {user.name.first} {user.name.last}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
          <button className="btn-light" onClick={loadUser2}>
            Reload
          </button>
        </>
      )}
    </div>
  );
};
