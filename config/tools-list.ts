// List of tools available to the agent
// No need to include the top-level wrapper object as it is added in lib/tools/tools.ts
// More information on function calling: https://platform.openai.com/docs/guides/function-calling

export const toolsList = [
  {
    name: "reset_password",
    parameters: {
      user_id: {
        type: "string",
        description: "User ID to send password reset email to",
      },
    },
  },
];

// Tools that will need to be confirmed by the human representative before execution
// Ex: "get_order" and "create_ticket" are low-risk so they can be automatically executed
export const agentTools = [
  "reset_password",
];
