import { Tabs, Tab } from "@nextui-org/react";
import useModelStore from "@/context/useModelStore";
import { Model } from "../../actions";
import {
  SiOpenai,
  SiAnthropic,
  SiGoogle,
  SiMeta,
} from "@icons-pack/react-simple-icons";

const categories = [
  { name: "OpenAI", icon: <SiOpenai size={16} /> },
  { name: "Anthropic", icon: <SiAnthropic size={16} /> },
  { name: "Google", icon: <SiGoogle size={16} /> },
  { name: "Meta", icon: <SiMeta size={16} /> },
];

interface ModelsSectionProps {
  models: Model[];
}

export function ModelsSection({ models }: ModelsSectionProps) {
  const { modelId, setModelId, provider, setProvider, setModelName } =
    useModelStore();

  return (
    <div className="flex flex-col w-full mt-2">
      <Tabs
        isVertical={true}
        color="primary"
        classNames={{
          tabList: "bg-[#3E3E3E]",
        }}
        defaultSelectedKey={provider}
        onSelectionChange={(value) => {
          setProvider(value as string);
        }}
      >
        {categories.map((category) => (
          <Tab
            key={category.name}
            value={category.name}
            title={
              <div className="flex text-xs items-center justify-start space-x-1">
                {category.icon}
                <span>{category.name}</span>
              </div>
            }
          >
            <Tabs
              isVertical={true}
              color="primary"
              onSelectionChange={(value) => {
                setModelId(value as string);
                setModelName(
                  models.find((model) => model.model_id === value)?.name || ""
                );
              }}
              defaultSelectedKey={modelId}
              classNames={{
                tabList: "bg-[#3E3E3E]",
              }}
            >
              {models
                .filter(
                  (model) => model.category === category.name.toLowerCase()
                )
                .map((model) => (
                  <Tab
                    key={model.model_id}
                    value={model.model_id}
                    title={
                      <div className="flex text-xs items-center justify-start space-x-1">
                        <span>{model.name}</span>
                      </div>
                    }
                  ></Tab>
                ))}
            </Tabs>
          </Tab>
        ))}
        <Tab
          key="others"
          value="Others"
          title={
            <div className="flex text-xs items-center justify-start space-x-1">
              <span>Others</span>
            </div>
          }
        >
          <Tabs
            isVertical={true}
            color="primary"
            onSelectionChange={(value) => {
              setModelId(value as string);
              setModelName(
                models.find((model) => model.model_id === value)?.name || ""
              );
              setProvider("Others");
            }}
            defaultSelectedKey={modelId}
            classNames={{
              tabList: "bg-[#3E3E3E]",
            }}
          >
            {models
              .filter(
                (model) =>
                  !categories
                    .flatMap((c) => c.name.toLocaleLowerCase())
                    .includes(model.category)
              )
              .map((model) => (
                <Tab
                  key={model.model_id}
                  value={model.model_id}
                  title={
                    <div className="flex text-xs items-center justify-start space-x-1">
                      <span>{model.name}</span>
                    </div>
                  }
                ></Tab>
              ))}
          </Tabs>
        </Tab>
      </Tabs>
    </div>
  );
}
