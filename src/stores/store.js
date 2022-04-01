import { writable } from "svelte/store";
import data from "../../data.json";

export const commentsList = writable(data.comments);
export const currentUser = data.currentUser;
export let isModalOpen = writable(false);
