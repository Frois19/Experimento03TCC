import os
import pandas as pd
from datetime import datetime as dt
import scipy.stats as stats
import matplotlib.pyplot as plt
import numpy as np
from dotenv import load_dotenv

load_dotenv()

csv_cdk = os.environ.get('PATH_OUTPUT_CSV__FILE_CDK_TO_INDEX')
csv_terraform = os.environ.get('PATH_OUTPUT_CSV_FILE_TERRAFORM_TO_INDEX')

path_graphs = os.environ.get('PATH_OUTPUT_GRAPH_FILE_TO_MAIN')



def calculator_age(created_at: str) -> float:
    now = dt.now()
    created_at = dt.strptime(created_at, '%d/%m/%Y %H:%M:%S')
    return (now - created_at).days * 24 + (now - created_at).seconds/3600

def scatter_and_spearman(df, x_column, y_column, save_path):
    plt.figure(figsize=(10, 5))
    plt.scatter(df[x_column], df[y_column], color="#4283b3")
    spearman = stats.spearmanr(df[x_column], df[y_column])
    title = 'Spearman: ' + str(round(spearman[0], 2))
    plt.title(f"{x_column} x {y_column}\n{title}")
    plt.xlabel(x_column)
    plt.ylabel(y_column)
    plt.savefig(save_path, dpi=300, bbox_inches='tight')


def bar(df, x_column, y_column, save_path):
    plt.figure(figsize=(10, 5))
    plt.bar(df[x_column], df[y_column], color="#4283b3")
    plt.title(f"{x_column} x {y_column}\n")
    plt.xlabel(x_column)
    plt.ylabel(y_column)
    plt.savefig(save_path, dpi=300, bbox_inches='tight')


def analyze_dataset(csv_path, x_column, y_column, save_dir, option, tool):

    df = pd.read_csv(csv_path)
    plt.style.use('_mpl-gallery')

    df['TempoDuracao'] = (df['HoraInicio'].apply(calculator_age) - df['HoraFinal'].apply(calculator_age)) * 60

    if not os.path.exists(save_dir):
        os.makedirs(save_dir)

    if(option == 1):
        scatter_and_spearman(df, x_column, y_column, os.path.join(save_dir, f"{x_column}&{y_column}{tool}.png"))

    if(option == 2):
        bar(df, x_column, y_column, os.path.join(save_dir, f"{x_column}&{y_column}{tool}.png"))


analyze_dataset(csv_terraform,'TempoDuracao', 'Total', path_graphs, 1, 'Terraform')
analyze_dataset(csv_terraform, 'TempoExperiencia', 'PontuacaoQuestoesDificies', path_graphs, 2, 'Terraform')
analyze_dataset(csv_terraform, 'PossuiConhecimentoIaC', 'Total', path_graphs, 2, 'Terraform')
analyze_dataset(csv_terraform, 'PossuiExperiencia', 'Total', path_graphs, 2, 'Terraform')

analyze_dataset(csv_cdk, 'TempoDuracao', 'Total', path_graphs, 1, 'CDK')
analyze_dataset(csv_cdk, 'TempoExperiencia', 'PontuacaoQuestoesDificies', path_graphs, 2, 'CDK')
analyze_dataset(csv_cdk, 'PossuiConhecimentoIaC', 'Total', path_graphs, 2, 'CDK')
analyze_dataset(csv_cdk, 'PossuiExperiencia', 'Total', path_graphs, 2, 'CDK')


def boxplot_compare_dataset(df1, df2, column, save_path, labels, median1, median2,title):
    plt.figure(figsize=(10, 5))
    plt.boxplot([df1[column], df2[column]], labels=labels,
    showfliers=True, whis=1.5, patch_artist=True, boxprops=dict(facecolor="#6796b8", color="#13496e"), medianprops=dict(color="#13496e"),
whiskerprops=dict(color="#13496e"), capprops=dict(color="#13496e"), flierprops=dict(markeredgecolor='#13496e')

)
    plt.annotate(median1, xy =(1, median1)) 
    plt.annotate(median2, xy =(2, median2))     
    plt.title(title)
    plt.savefig(save_path, dpi=300, bbox_inches='tight')

def compare_dataset(first_dataset_path, second_dataset_path, column, save_dir):

    df1 = pd.read_csv(first_dataset_path)
    df2 = pd.read_csv(second_dataset_path)

    plt.style.use('_mpl-gallery')

    if not os.path.exists(save_dir):
        os.makedirs(save_dir)

    median1 = df1[column].median()
    median2 = df2[column].median()

    boxplot_compare_dataset(df1, df2, column, os.path.join(save_dir, f"{column}.png"), ["CDK", "Terraform"], median1, median2, "Total")

compare_dataset(csv_cdk, csv_terraform, 'Total', path_graphs)

def boxplot(df, columns, save_path, labels, title):

    data_to_plot = [df[col] for col in columns]
    medians = [col.median() for col in data_to_plot]

    plt.figure(figsize=(10, 5))
    plt.boxplot(data_to_plot, labels=labels,
    showfliers=True, whis=1.5, patch_artist=True,  boxprops=dict(facecolor="#6796b8", color="#13496e"), medianprops=dict(color="#13496e"),
whiskerprops=dict(color="#13496e"), capprops=dict(color="#13496e"), flierprops=dict(markeredgecolor='#13496e')


    )

    for i, median in enumerate(medians):
        plt.annotate(f"{median:.2f}", xy=(i + 1, median)),

    plt.title(title)
    plt.savefig(save_path, dpi=300, bbox_inches='tight')

def compare_questions(csv_path, columns, save_dir, labels, title, tool):

    df = pd.read_csv(csv_path)

    plt.style.use('_mpl-gallery')

    if not os.path.exists(save_dir):
        os.makedirs(save_dir)

    boxplot(df, columns, os.path.join(save_dir, f"{title}{tool}.png"), labels, title)

compare_questions(csv_cdk, ['PontuacaoQuestoesFaceis', 'PontuacaoQuestoesMedias', 'PontuacaoQuestoesDificies'], path_graphs, ['Faceis', 'Medias', 'Dificies'], 'QuestionsGoal', 'CDK')
compare_questions(csv_terraform, ['PontuacaoQuestoesFaceis', 'PontuacaoQuestoesMedias', 'PontuacaoQuestoesDificies'], path_graphs, ['Faceis', 'Medias', 'Dificies'], 'QuestionsGoal', 'Terraform')

