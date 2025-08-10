import memberZhang from '@/assets/member-zhang.jpg';
import memberLi from '@/assets/member-li.jpg';
import memberWang from '@/assets/member-wang.jpg';

const StorySection = () => {
  const stories = [
    {
      id: 1,
      name: '王小鸽',
      title: 'AI架构师',
      avatar: memberZhang,
      story: '从百度离职后，我带着AI算法优化的梦想来到香河。但现实很快给了我当头一棒 - 本地企业不理解技术价值，只看重关系和人情。在X极客网，我找到了真正懂技术、重创新的伙伴们。',
      achievement: '3个月内完成量子传感器原型，获得200万天使投资',
      quote: '在这里，技术不再是被误解的异类，而是被尊重的创新力量。'
    },
    {
      id: 2,
      name: '李博士',
      title: '硬件专家',
      avatar: memberLi,
      story: '华为15年的工作经验让我积累了丰富的硬件设计能力，但回到香河创业时却处处碰壁。传统思维的投资人不相信硬科技，只愿意投"看得见摸得着"的项目。X极客网改变了这一切。',
      achievement: '18项发明专利成功转化，成立硬件创新实验室',
      quote: '创新需要的不是妥协，而是找到同频共振的生态圈。'
    },
    {
      id: 3,
      name: '李投资人',
      title: '连续创业者',
      avatar: memberWang,
      story: '三次创业经历让我深知，最大的障碍不是技术或资金，而是价值观的鸿沟。香河的商业环境更偏向保守和短视，而X极客网聚集的都是有长远视野的创新者。',
      achievement: '孵化5个项目，总估值突破2亿元',
      quote: '真正的创新者不是独行侠，而是能够聚合力量的组织者。'
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-6 text-balance">
            极客故事
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            每一个故事都是我们认知的觉醒，每一次突破都是生态圈的力量
          </p>
        </div>

        <div className="space-y-16">
          {stories.map((story, index) => (
            <div 
              key={story.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Story Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={story.avatar}
                    alt={story.name}
                    className="w-16 h-16 rounded-full border-2 border-accent/20"
                  />
                  <div>
                    <h3 className="text-xl font-medium">{story.name}</h3>
                    <p className="text-muted-foreground">{story.title}</p>
                  </div>
                </div>

                <blockquote className="text-lg font-light leading-relaxed text-accent italic border-l-2 border-accent pl-4">
                  "{story.quote}"
                </blockquote>

                <p className="text-muted-foreground leading-relaxed">
                  {story.story}
                </p>

                <div className="bg-accent/5 rounded-lg p-4 border-l-4 border-accent">
                  <h4 className="font-medium text-sm mb-2 text-accent">创新成果</h4>
                  <p className="text-sm text-muted-foreground">
                    {story.achievement}
                  </p>
                </div>
              </div>

              {/* Visual Element */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative h-80 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={story.avatar}
                      alt={story.name}
                      className="w-32 h-32 rounded-full border-4 border-background shadow-lg"
                    />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-accent/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent/20 rounded-full animate-pulse animation-delay-200"></div>
                  <div className="absolute top-1/2 left-4 w-8 h-8 bg-accent/15 rounded-full animate-pulse animation-delay-300"></div>
                  
                  {/* Success metrics overlay */}
                  <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-lg font-light text-accent">
                      {index === 0 ? '200万' : index === 1 ? '18项' : '2亿'}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {index === 0 ? '投资' : index === 1 ? '专利' : '估值'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-light mb-4">
            开始您的创新故事
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            加入X极客网，与志同道合的创新者一起，用价值观和技能改变世界
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-3">
              申请加入
            </button>
            <button className="btn-outline px-8 py-3">
              了解更多
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;