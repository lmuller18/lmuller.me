const Anchor = ({ id, offset = -30 }) => (
  <a id={id} className="block relative invisible" style={{ top: offset }} />
)

export default Anchor
