const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
      <ul>
        <li className="mb-2">
          <a href="/" className="block-p-2">
            Dashboard
          </a>
        </li>
        <li className="mb-2">
          <a href="/settings" className="block-p-2">
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
