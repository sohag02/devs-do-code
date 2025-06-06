export const fetchUser = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile`,
    {
      credentials: "include",
    }
  );

  if (response.ok) {
    return response.json(); // User details
  } else {
    // throw new Error('Failed to fetch user');
    return null;
  }
};
