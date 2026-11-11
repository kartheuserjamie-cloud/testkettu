(() => {
    /*
     * Oneko for Kettu — mobile rewrite inspired by adryd's oneko and Vencord's oneko plugin.
     * Uses React Native, not DOM or mouse events.
     * MIT licensed rewrite; original inspirations have their own licenses.
     *
     * Kettu's Vendetta-compatible loader evaluates this file as one expression.
     */
    const React = vendetta.metro.common.React;
    const RN = vendetta.metro.common.ReactNative;
    const { View, Text, Image, Dimensions } = RN;
    const SPRITES = {"idle":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABWklEQVR4nO2ZMW7CQBBFP1FokNLTpbSM0rixRMUZXOYWcBK4RcqcgSpSmjRRUMqcgwKqkZwR4/Xuer0aM6+zZMbeeexfew0YSinK9aUo15fc13lIfQOpeYwtwLvze/qYxda8VVfCDHCoc74mQueTGSC+d1sAwMv+ACC8o7yOC/UGghNjjDWgjTSn1BsYbA58fb4PVQoAUNVNr/PMwNCd53VdJtQb8E4hSp9UnZcgEzyN1BuwAeRGTKGxV9pQpmuAQ7PfZYbndt+0Cv3d9AzwDlMnFk/LkW7JD/UGbAC5EZ+FpLlAaUHHP6c/AMCqfO680Pzt+O/4/LrpPJ/XneyzkLcBgptIhdR5YroGiL7PRKnfie/XgAR/M+u7i+CLa49VvQHbF8pN9NeUoXcpXLnPUW8g2QCqukmWTG3UG4hOodZ/9eaK7bIQO3fMACF12pUmVd1E7T+pN2Dk5grxJ327VmscHwAAAABJRU5ErkJggg==","walk0":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABWklEQVR4nO2ZMW7CQBBFP1FokNLTpbSM0rixRMUZXOYWcBK4RcqcgSpSmjRRUMqcgwKqkZwR4/Xuer0aM6+zZMbeeexfew0YSinK9aUo15fc13lIfQOpeYwtwLvze/qYxda8VVfCDHCoc74mQueTGSC+d1sAwMv+ACC8o7yOC/UGghNjjDWgjTSn1BsYbA58fb4PVQoAUNVNr/PMwNCd53VdJtQb8E4hSp9UnZcgEzyN1BuwAeRGTKGxV9pQpmuAQ7PfZYbndt+0Cv3d9AzwDlMnFk/LkW7JD/UGbAC5EZ+FpLlAaUHHP6c/AMCqfO680Pzt+O/4/LrpPJ/XneyzkLcBgptIhdR5YroGiL7PRKnfie/XgAR/M+u7i+CLa49VvQHbF8pN9NeUoXcpXLnPUW8g2QCqukmWTG3UG4hOodZ/9eaK7bIQO3fMACF12pUmVd1E7T+pN2Dk5grxJ327VmscHwAAAABJRU5ErkJggg==","walk1":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABSklEQVR4nO2ZsQ6CMBCGf40uJu5ujgTj4mLC5DM4+hb6JPoWjj6Dk4mLi5E4+hwOOF0iFw9ooTTF+zYSPOh93rW0gBIoUZxkUZxkvp/Td/0CrhnUDcCz80wvvboxf8WVUAMcypypCdt6UgPEfbcFAMz3BwD2GeVxygjegHXHaGMO+EaqqeANNFYDt+upqVAAgMVyXek+NdB05nncMhPBGzDuQtR9XGVegkzwbhS8AR2Ab8Qu1PZMa0t3DXCo+svM8L5dtVvZ/q57BniGKROj8aSlVzIjeAM6AN+IayGpFqhb0PUjfQEAZvG08EHD4zl3/d6sCu/ncTu7FjI2QHATrpAyT3TXAFF1TeT6m/h/DUjwL7OquwimlO2xBm9A94V8Y23g67+Z61JtzQ9E8AZ0AL5p/IyMMJ0XbGtGDUiZNj2lXCzX/3lKqfjmAzHqeE4p7Vt1AAAAAElFTkSuQmCC","sleep":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABYElEQVR4nO2YoY7CQBCG/17AkJw/hyQlmDMkqHsGJG9xPAm8BZJnQJFgMBcaJA5PgkGAmuS6MN3tdpZm2v1ckzKl83VmdheIKGWQTu6DdHKv+zkfof9AaDpVA5jZOWbbpGrMV3E5ogETylxZE771FA0Qf/NfAMBosQTgn1Ezjg31Brw7xjtmwH+4mlJvQKwG9ru1VCgAwPd46nRfNCCdeTOuzYR6A6W7EHWfUJnnIBNmN1JvIL5A3bBd6N2T1hf1Bpxf4JhtE6ndliTqDTzVgPntU7/vfX4VBuImpm1e+P6OaJ4BX3wnc9WJ3jwD1GmoFugbvV7OuWvikJ0AAMO0X/ig7mqTu77Nfgrvd42r3gDb17luRJCJ0KtSbhVKNNcA4bomCr0nbq8BDnNn5nqKUBbb+ku9gdonMUdrzoUqr++lTylsfd9EvQGxGgjVhWyoNyC2x5U6xSi771ZvIBJpOw+VbnphGeF3BQAAAABJRU5ErkJggg=="};
    const SIZE = 48;
    const TICK_MS = 80;
    let sibling = null;
    let active = true;
    let overlayFound = false;

    const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

    function Cat(props) {
        const embedded = !!props.embedded;
        const dim = Dimensions.get("window");
        const width = embedded ? dim.width - 40 : dim.width;
        const height = embedded ? 260 : dim.height;
        const position = React.useRef({x: Math.max(8, width - 88), y: height - 94});
        const destination = React.useRef({ ...position.current });
        const dragging = React.useRef(false);
        const touchStart = React.useRef(null);
        const lastMoveAt = React.useRef(Date.now());
        const nextWanderAt = React.useRef(Date.now() + 1500);
        const tickIndex = React.useRef(0);
        const direction = React.useRef(1);
        const [view, setView] = React.useState({ ...position.current, moving: false, sleeping: false, frame: 0, dir: 1 });

        React.useEffect(() => {
            let mounted = true;
            const id = setInterval(() => {
                if (!mounted || !active || dragging.current) return;
                const now = Date.now();
                const p = position.current;
                const target = destination.current;
                const maxX = Math.max(0, width - SIZE);
                const maxY = Math.max(0, height - SIZE);

                if (now >= nextWanderAt.current) {
                    destination.current = {
                        x: 8 + Math.random() * Math.max(0, maxX - 16),
                        y: (embedded ? 20 : 55) + Math.random() * Math.max(0, maxY - (embedded ? 30 : 110))
                    };
                    nextWanderAt.current = now + 2500 + Math.random() * 2500;
                }

                const dx = destination.current.x - p.x;
                const dy = destination.current.y - p.y;
                const distance = Math.hypot(dx, dy);
                let moving = false;
                if (distance > 2) {
                    const speed = Math.min(5, distance);
                    p.x = clamp(p.x + dx / distance * speed, 0, maxX);
                    p.y = clamp(p.y + dy / distance * speed, 0, maxY);
                    if (Math.abs(dx) > 0.3) direction.current = dx < 0 ? -1 : 1;
                    lastMoveAt.current = now;
                    moving = true;
                }
                tickIndex.current++;
                setView({
                    x: p.x,
                    y: p.y,
                    moving,
                    sleeping: !moving && now - lastMoveAt.current > 7000,
                    frame: Math.floor(tickIndex.current / 3) % 2,
                    dir: direction.current
                });
            }, TICK_MS);
            return () => { mounted = false; clearInterval(id); };
        }, []);

        const moveCat = (event) => {
            const touch = event.nativeEvent;
            if (!touchStart.current || typeof touch.pageX !== "number") return;
            const x = clamp(touchStart.current.x + touch.pageX - touchStart.current.pageX,
                0, Math.max(0, width - SIZE));
            const y = clamp(touchStart.current.y + touch.pageY - touchStart.current.pageY,
                0, Math.max(0, height - SIZE));
            position.current = { x, y };
            destination.current = { x, y };
            lastMoveAt.current = Date.now();
            setView(v => ({ ...v, x, y, moving: false, sleeping: false }));
        };

        const sprite = view.sleeping ? SPRITES.sleep : view.moving
            ? (view.frame ? SPRITES.walk1 : SPRITES.walk0) : SPRITES.idle;
        return React.createElement(View, {
            pointerEvents: "box-none",
            style: embedded
                ? { width, height, borderRadius: 12, backgroundColor: "#23252f", overflow: "hidden" }
                : { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 99999 }
        },
            React.createElement(View, {
                style: { position: "absolute", left: view.x, top: view.y, width: SIZE, height: SIZE },
                onStartShouldSetResponder: () => true,
                onMoveShouldSetResponder: () => true,
                onResponderGrant: (event) => {
                    dragging.current = true;
                    const touch = event.nativeEvent;
                    touchStart.current = {
                        x: position.current.x, y: position.current.y,
                        pageX: touch.pageX, pageY: touch.pageY
                    };
                },
                onResponderMove: moveCat,
                onResponderRelease: () => {
                    dragging.current = false;
                    touchStart.current = null;
                    nextWanderAt.current = Date.now() + 1000;
                },
                onResponderTerminate: () => { dragging.current = false; touchStart.current = null; }
            }, React.createElement(Image, {
                source: { uri: sprite },
                style: { width: SIZE, height: SIZE, transform: [{ scaleX: view.dir }] },
                resizeMode: "contain"
            }))
        );
    }

    function Settings() {
        return React.createElement(View, { style: { padding: 18, gap: 12 } },
            React.createElement(Text, { style: { color: "#fff", fontSize: 20, fontWeight: "700" } }, "Oneko für Kettu 🐱"),
            React.createElement(Text, { style: { color: "#d0d2dc", fontSize: 14 } },
                overlayFound
                  ? "Die Katze ist als Overlay aktiv. Du kannst sie mit dem Finger verschieben."
                  : "Kein kompatibler Overlay-Host erkannt. Hier kannst du die Katze zumindest testen."
            ),
            React.createElement(Cat, { embedded: true }),
            React.createElement(Text, { style: { color: "#a2a6b6", fontSize: 12 } },
                "Die Katze läuft von selbst herum. Deaktivieren entfernt das Overlay."
            )
        );
    }

    return {
        onLoad() {
            active = true;
            overlayFound = false;
            try {
                // Some Discord React Native builds mount react-native-root-siblings.
                // It is not a guaranteed public Kettu API.
                const mod = vendetta.metro.findByProps("RootSiblingParent", "RootSiblingPortal")
                    || vendetta.metro.findByProps("RootSiblingParent");
                const RootSibling = mod?.default || mod?.RootSibling;
                if (typeof RootSibling === "function") {
                    sibling = new RootSibling(React.createElement(Cat, { embedded: false }));
                    overlayFound = true;
                } else {
                    vendetta.logger?.warn?.("Oneko: no compatible root-sibling overlay host; settings preview remains available.");
                }
            } catch (e) {
                vendetta.logger?.error?.("Oneko overlay could not be mounted", e);
                sibling = null;
            }
        },
        onUnload() {
            active = false;
            sibling?.destroy?.();
            sibling = null;
            overlayFound = false;
        },
        settings: Settings
    };
})()
