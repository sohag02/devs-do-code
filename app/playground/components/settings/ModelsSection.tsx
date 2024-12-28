import { Tabs, Tab } from "@nextui-org/react";
import useModelStore from "@/context/useModelStore";
import { Model } from "../../actions";

const categories = [
  "GPT Models",
  "Google Gemma Models",
  "Claude Models",
  "Meta LLaMA Models",
];

interface ModelsSectionProps {
  models: Model[];
}

export function ModelsSection({ models }: ModelsSectionProps) {
  const { modelId, setModelId, provider, setProvider } = useModelStore();

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
            key={category}
            value={category}
            title={
              <div className="flex text-xs items-center justify-start space-x-1">
                <span>{category.replace("Models", "")}</span>
              </div>
            }
          >
            <Tabs
              isVertical={true}
              color="primary"
              onSelectionChange={(value) => {
                setModelId(value as string);
              }}
              defaultSelectedKey={modelId}
              classNames={{
                tabList: "bg-[#3E3E3E]",
              }}
            >
              {models
                .filter((model) => model.category === category)
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
            }}
            defaultSelectedKey={modelId}
            classNames={{
              tabList: "bg-[#3E3E3E]",
            }}
          >
            {models
              .filter((model) => !categories.includes(model.category))
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
