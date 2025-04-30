// Functions mapping to tool calls
// Define one function per tool call - each tool call should have a matching function
// Parameters for a tool call are passed as an object to the corresponding function

export const reset_password = async ({ user_id }: { user_id: string }) => {
  try {
    const res = await fetch(`/api/users/${user_id}/reset_password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }).then((res) => res.json());
    return res;
  } catch (error) {
    console.error(error);
    return { error: "Failed to reset password" };
  }
};

export const functionsMap = {
  reset_password: reset_password,
};
