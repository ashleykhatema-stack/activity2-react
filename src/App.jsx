import { useState } from "react";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Manage from "./components/Manage";
import DeleteModal from "./Modals/DeleteModal";
import EditModal from "./Modals/EditModal";
import AddModal from "./Modals/AddModal";

function App() {

  const [activeNav, setActiveNav] = useState('Home');

  const goToPage = (page) => {
    setActiveNav(page);
  }

  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [addModal, setAddModal] = useState(false)
  const [selectedprofile, setSelectedProfile] = useState(null)
  const [profile, setProfile] = useState(
    [
      {
        id: 1,
        name: 'Kit',
        age: 22,
        address: 'Tagum City',
        img: 'https://i.pinimg.com/736x/0d/09/cf/0d09cf77b23d319f44a69f648af2963d.jpg'
      },
      {
        id: 2,
        name: 'Mae',
        age: 34,
        address: 'Davao City',
        img: 'https://i.pinimg.com/736x/91/88/6d/91886dbfef81ad68247ff1406bc83baa.jpg'
      },
      {
        id:  3,
        name: 'Ivy',
        age: 21,
        address: 'Cebu City',
        img: 'https://i.pinimg.com/1200x/14/a9/f2/14a9f2e82a92e24bfe2cfc716327a0f7.jpg'
      },
    ]
  )

  const requestDelete = (index) => {
    setSelectedProfile(index);
    setDeleteModal(true)
  }
  const requestEdit = (index) => {
    setSelectedProfile(index);
    setEditModal(true)
  }

  const selectedprofileName = profile[selectedprofile];

  const confirmDelete = () => {
    const ref = [...profile];
    ref.splice(selectedprofile, 1);
    setProfile(ref);
    setDeleteModal(false)
  }
  const confirmEdit = (updateProfile) => {
    const ref = [...profile];
    ref[selectedprofile] = updateProfile;
    setProfile(ref);
    setEditModal(false)
  }
  const confirmAdd = (newStudent) => {
    const ref = [...profile, newStudent];
    setProfile(ref);
    setAddModal(false)

  }

  return (
    <>
      <Sidebar onSelectedTab={goToPage} />
      {activeNav === 'Home' &&
        < Home
          personalInfo={profile}
        />
      }
      {activeNav === 'Manage' &&
        <Manage
          personalInfo={profile}
          confirm={requestDelete}
          onEdit={requestEdit}
          onAdd={() => setAddModal(true)}
        />
      }
      <DeleteModal
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        onConfirm={confirmDelete}
        pickProfile={selectedprofileName}

      />
      <EditModal
        isEditModal={editModal}
        onCancel={() => setEditModal(false)}
        onSave={confirmEdit}
        pickProfile={selectedprofileName}

      />

      <AddModal
        isAdd={addModal}
        cancelAdd={() => setAddModal(false)}
        onSave={confirmAdd}
      />
    </>
  )
}
export default App



