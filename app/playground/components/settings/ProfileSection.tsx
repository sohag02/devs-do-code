// import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import useModelStore from "@/context/useModelStore";
import useSettingsStore from "@/context/useSettingsStore";
import useVoiceStore from "@/context/useVoiceStore";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

interface Profile {
  name: string;
  modelId: string;
  provider: string;
  voiceId: string;
  temperature: number;
  topP: number;
  customInstructions: string;
}

export function ProfileSection() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    modelId,
    modelName,
    provider,
    setModelId,
    setProvider,
  } = useModelStore();
  const { temperature, topP, customInstructions, updateSettings } =
    useSettingsStore();
  const { voiceId, setVoiceID } = useVoiceStore();
  const [profileName, setProfileName] = useState("");

  const { toast } = useToast();

  const saveProfile = () => {
    const profile: Profile = {
      name: profileName,
      modelId,
      provider,
      voiceId,
      temperature,
      topP,
      customInstructions,
    };
    const existingProfiles = JSON.parse(
      localStorage.getItem("profiles") || "[]"
    );
    localStorage.setItem(
      "profiles",
      JSON.stringify([...existingProfiles, profile])
    );
    setProfiles([...profiles, profile]);
  };

  const deleteProfile = (profile: Profile) => {
    const existingProfiles = JSON.parse(
      localStorage.getItem("profiles") || "[]"
    );
    localStorage.setItem(
      "profiles",
      JSON.stringify(
        existingProfiles.filter((p: Profile) => p.name !== profile.name)
      )
    );
    setProfiles(
      existingProfiles.filter((p: Profile) => p.name !== profile.name)
    );
  };

  const applyProfile = (profile: Profile) => {
    setModelId(profile.modelId);
    // setModelName(profile.modelName);
    setProvider(profile.provider);
    setVoiceID(profile.voiceId);
    updateSettings({ temperature: profile.temperature });
    updateSettings({ topP: profile.topP });
    updateSettings({ customInstructions: profile.customInstructions });
    toast({
      title: `${profile.name} Profile Applied`,
      description: "Your profile has been applied successfully.",
      variant: "success",
    });
  };

  useEffect(() => {
    const profiles = JSON.parse(localStorage.getItem("profiles") || "[]");
    setProfiles(profiles);
  }, []);

  const newProfileBtn = (
    <>
      <Button
        onPress={onOpen}
        className="w-full hover:bg-gray-400/10 mb-2"
        variant="bordered"
      >
        <Plus className="w-4 h-4 mr-2" />
        Create New Profile
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
        <ModalContent className="text-white">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Save Profile
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Profile Name"
                  placeholder="Enter a name for your profile"
                  className="w-full"
                  labelPlacement="outside"
                  onChange={(e) => setProfileName(e.target.value)}
                  required
                />
                <p>Current Configuration</p>
                <div className="p-4 space-y-2  bg-gray-400/10 rounded-xl">
                  <p>
                    <span className="font-bold">Model:</span> {modelName}
                  </p>
                  <p>
                    <span className="font-bold">Voice:</span> {voiceId}
                  </p>
                  <p>
                    <span className="font-bold">Temperature:</span>{" "}
                    {temperature}
                  </p>
                  <p>
                    <span className="font-bold">Top P:</span> {topP}
                  </p>
                  <p>
                    <span className="font-bold">Custom Instructions:</span>{" "}
                    {customInstructions}
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={saveProfile} isDisabled={!profileName}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );

  if (profiles.length === 0) {
    return (
      <div className="space-y-4 text-center text-sm text-gray-400 p-4">
        <p>
          No AI profiles available. Create a profile to save your current
          configuration, including selected models, personality settings, and
          other preferences. Profiles help you quickly switch between different
          AI configurations for various tasks.
        </p>
        {newProfileBtn}
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-2 mb-2">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.name}
            profile={profile}
            onClick={applyProfile}
            onDelete={deleteProfile}
          />
        ))}
      </div>
      {newProfileBtn}
    </div>
  );
}

function ProfileCard({
  profile,
  onClick,
  onDelete,
}: {
  profile: Profile;
  onClick: (profile: Profile) => void;
  onDelete: (profile: Profile) => void;
}) {
  return (
    <div
      className="p-4 bg-[#3E3E3E] hover:bg-[#3E3E3E]/50 hover:cursor-pointer rounded-lg"
      onClick={() => onClick(profile)}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Image
            src={`https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${profile.name}`}
            alt="Profile"
            width={44}
            height={44}
            unoptimized
            className="rounded-full"
          />
          <div>
            <p className="font-bold">{profile.name}</p>
            <p className="text-sm text-gray-400">{profile.modelId}</p>
          </div>
        </div>
        <Button
          className="bg-transparent hover:bg-red-400/10 hover:text-red-400 mr-2"
          onPress={() => onDelete(profile)}
        >
          <Trash2 className="w-4 h-4 text-red-400" />
        </Button>
      </div>
    </div>
  );
}
