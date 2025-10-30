"use client";
import { useEffect, useState } from "react";

export default function IdleMount({ children, delay = 300 }) {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const cb = () => setReady(true);
		const id =
			typeof requestIdleCallback !== "undefined"
				? requestIdleCallback(cb)
				: setTimeout(cb, delay);
		return () =>
			typeof cancelIdleCallback !== "undefined"
				? cancelIdleCallback(id)
				: clearTimeout(id);
	}, [delay]);

	return ready ? children : null;
}
